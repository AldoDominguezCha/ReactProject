import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../UI/LoadingSpinner';
import NewCommentForm from './NewCommentForm';
import CommentsList from './../comments/CommentsList';

import useHttp from '../../hooks/use-http';
import { getAllComments } from './../../lib/api';

import classes from './Comments.module.css';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const routeParams = useParams();

  const { quoteId } = routeParams;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let commentsContent = null;

  if (status === 'pending') {
    commentsContent = (
      <div className='cenetered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    commentsContent = (
      <CommentsList comments={loadedComments}/>
    );
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    commentsContent = <p className='centered'>No comments for the quote so far!</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler}/>}
      {commentsContent}
    </section>
  );
};

export default Comments;
