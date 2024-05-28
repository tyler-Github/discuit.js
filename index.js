const axios = require('axios');

class DiscuitBot {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.token = null;
  }

  async login(username, password) {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, { username, password });
      this.token = response.data.token;
      console.log('Authenticated successfully');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }

  setToken(token) {
    this.token = token;
  }

  async getRecentPosts(nextCursor = null) {
    try {
      const response = await axios.get(`${this.apiUrl}/posts`, {
        headers: { Authorization: `Bearer ${this.token}` },
        params: { next: nextCursor }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  async getPost(postId) {
    try {
      const response = await axios.get(`${this.apiUrl}/posts/${postId}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  async getComments(postId) {
    try {
      const response = await axios.get(`${this.apiUrl}/posts/${postId}/comments`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  async createPost(type, title, body, community, url = null) {
    try {
      const response = await axios.post(`${this.apiUrl}/posts`, {
        type,
        title,
        body,
        community,
        url
      }, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  async commentOnPost(postId, parentCommentId, body) {
    try {
      const response = await axios.post(`${this.apiUrl}/posts/${postId}/comments`, {
        parentCommentId,
        body
      }, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }
}

module.exports = DiscuitBot;
