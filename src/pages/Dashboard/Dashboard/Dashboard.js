import React from 'react';
import { Col, ListGroup, Nav, Button, Row, Container } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../AdminRoute/AdminRoute';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    const { admin, user, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col className="col-md-3 bg-secondary text-white py-3">
                        <ListGroup>
                            {
                                admin ?
                                    <>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/all-orders`}>Manage All Orders</Nav.Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/add-product`}>Add Product</Nav.Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/manage-product`}>Manage Products</Nav.Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/make-admin`}>Make Admin</Nav.Link>
                                        </ListGroup.Item>
                                    </>
                                    :
                                    <>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/pay`}>Pay</Nav.Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/my-orders`}>My Orders</Nav.Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-secondary text-white  border-white ">
                                            <Nav.Link as={Link} className="text-white" to={`${url}/review`}>Review</Nav.Link>
                                        </ListGroup.Item>
                                    </>
                            }
                            {
                                user?.email &&
                                <ListGroup.Item className="bg-secondary text-white  border-white ">
                                    <Button onClick={logOut} variant="warning" size="sm">Logout</Button>
                                </ListGroup.Item>
                            }

                        </ListGroup>
                    </Col>
                    <Col className="col-md-9 bg-info py-3">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <PrivateRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/my-orders`}>
                                <MyOrders></MyOrders>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/review`}>
                                <Review></Review>
                            </PrivateRoute>
                            <AdminRoute path={`${path}/add-product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-product`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/all-orders`}>
                                <AllOrders></AllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Dashboard;