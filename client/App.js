import React from 'react';
import Component from './Components/Component.js';
import API_KEY from './env.js';

const App = () => {

  const query = `{
                    shop {
                      name
                    }
                  }`;

  function apiCall(query) {
    return fetch('https://thememinimal.myshopify.com/api/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token': API_KEY
      },
      body: query
    }).then(response => response.json());
  }


  apiCall(query).then(response => {

    console.log('Store Front API GraphQL Response: ');
    console.log(response);
  });

  return (
    <div className="container">
      <Component />
    </div>
  );
};
export default App;