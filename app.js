// set list of posts set in an array

const posts = [
  {
    title: 'Amazing new framework!!!', 
    summary: 'Why you must start using Explode.js IMMEDIATELY!',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/any'
  },
  {
    title: 'Understanding the Event Loop', 
    summary: 'This post will change your life.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/nature'
  },
  {
    title: 'No seriously, what is a $%*# is a promise?', 
    summary: 'Understanding callback heck and why you must avoid it.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/tech'
  },
];


new Vue({
  el: '#app',
  data: {
    posts: posts,
    newTitle: '',
    newSummary: '',
    error: false
  },
  methods: {
    // method to add votes
    increment: function(post){
      post.votes += 1; 
    },
    // method to minus votes
    decrement: function(post){
      post.votes -= 1; 
    },
    // function to push new articles to the array
    createNew: function() {
      // if both fields not filled, error messages is pushed
      if ( !this.newTitle  || !this.newSummary ) {
        this.error = true;
      } else {
      this.posts.push({
        title: this.newTitle,
        summary: this.newSummary,
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/any'
      });
      //resets fields
      this.newTitle = '';
      this.newSummary = '';
      this.error = '';
      }
    }
  },
  computed: {
    // sorts posts by number of votes 
    orderedList: function () { 
      return this.posts.sort((currentPost,nextPost) =>{
      return nextPost.votes - currentPost.votes;
      });
    }
  }
});

