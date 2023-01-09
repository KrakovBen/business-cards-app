import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ROUTES from './routesModel'
import CardsPage from '../cards/pages/CardsPage'
import ErrorPage from '../pages/ErrorPage'
import AboutPage from '../pages/AboutPage'
import SandBox from '../sandbox/SandBox'
import LoginPage from '../users/pages/LoginPage'
import SignupPage from '../users/pages/SignupPage'
import CardDetailsPage from '../cards/pages/CardDetailsPage'
import CompLogic from '../sandbox/CompLogic'
import LifeCycleHooks from '../sandbox/life-cycle-hooks/LifeCycleHooks'
import InitialCycle from '../sandbox/life-cycle-hooks/InitialCycle'
import UseStateCycle from '../sandbox/life-cycle-hooks/UseStateCycle'
import UseEffectAsComponentDidMount from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount'
import UseEffectasComponentdidUpdate from '../sandbox/life-cycle-hooks/UseEffectasComponentdidUpdate'

const Router = () => {
    return (
        <Routes>
            {/* <Route path={ROUTES.ROOT} element={<CardsPage/>} /> */}
            <Route path={ROUTES.CARDS} element={<CardsPage/>} />
            <Route path={`${ROUTES.CARD_DETAILS}/:cardId`} element={<CardDetailsPage/>} />
            <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
            <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage/>} />

            <Route path={ROUTES.SANDBOX} element={<SandBox/>}>
                <Route path='logic' element={<CompLogic/>}/>
                <Route path='life-cycle' element={<LifeCycleHooks/>}>
                    <Route path='initial' element={<InitialCycle/>}/>
                    <Route path='use-state-cycle' element={<UseStateCycle/>}/>
                    <Route path='component-did-mount' element={<UseEffectAsComponentDidMount/>}/>
                    <Route path='component-did-update' element={<UseEffectasComponentdidUpdate/>}/>
                </Route>
            </Route>

            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    )
}

Router.propTypes = {}

export default Router