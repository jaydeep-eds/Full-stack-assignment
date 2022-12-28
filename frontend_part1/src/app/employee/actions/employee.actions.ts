import { createAction, props } from '@ngrx/store';
import { employee } from '../reducers/employee.reducers';

export const LOAD_POSTS = '[post page] load posts';
export const LOAD_POSTS_SUCCESS = '[post page] load posts success'


export const getEmployeeDetails = createAction('getEmployeeDetails', props<{ queryString: String, }>());


export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
    LOAD_POSTS_SUCCESS,
    props<{ employee: employee[] }>()
);
