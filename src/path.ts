const PATHS = {
  home() {
    return `/`;
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `${this.topicShow(topicSlug)}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `${this.topicShow(topicSlug)}/posts/${postId}`;
  },
};

export default PATHS;
