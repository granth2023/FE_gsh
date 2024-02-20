import { page } from 'next/app-router';

export default page({
  async load() { 
    return {
      pageTitle: 'Welcome to the HomePage',
      welcomeMessage: 'Explore',
    };
  }, 

  render({ data }){ 
    return ( 
      <main> 
        <h1>{data.pageTitle}</h1>

      </main>
    )
  }
})