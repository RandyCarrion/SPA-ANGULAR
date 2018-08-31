export interface Post {
  /**this is the template of how the post should look like;
   * included in all components that use the Post template;
   * post-create, post-list and app.component
  */
  id: string;
  title: string;
  content: string;
}
