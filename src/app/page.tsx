import { page } from 'next/app-router';

export default page({
  async load() { 
    return {
      pageTitle: 'Welcome to the HomePage',
      welcomeMessage: 'Explore',
    };
  }, 
})