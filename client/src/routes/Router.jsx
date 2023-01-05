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
            </Route>

            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    )
}

Router.propTypes = {}

export default Router