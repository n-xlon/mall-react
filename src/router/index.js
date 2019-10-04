import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../components/page/Home'
import Category from '../components/page/Category'
import BuyCar from '../components/page/BuyCar'
import User from '../components/page/User'
import UserDetail from '../components/page/Person'
import GoodDetails from '../components/page/GoodsDetails'
// import Search from '../components/page/Search'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={() => (
        <Redirect to='/home'/>
      )}>
      </Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/category' component={Category}></Route>
      <Route path='/buyCar' component={BuyCar}></Route>
      <Route path='/user' component={User}></Route>
      <Route path='/user-detail' component={UserDetail}/>
      <Route path='/details' component={GoodDetails}/>
    </Switch>
  </BrowserRouter>
)