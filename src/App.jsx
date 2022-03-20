/* eslint-disable import/no-anonymous-default-export */

import './App.css';
import React from 'react';

import Form from './components/form/Form'
import PageWelcome from './components/pageWelcome/PageWelcome';
import Card from './components/layout/Card'
import NewCard from './components/layout/NewCard';;

export default (props) =>(
    <div className="App">
      
      <NewCard>
        <PageWelcome/>
      </NewCard>
   
      <Card>
        <Form/>
      </Card>
      
    </div>
  );

