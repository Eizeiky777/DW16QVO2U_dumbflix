import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Dropdown, DropdownButton,  Col } from 'react-bootstrap';

import userPhoto from './data/user_photo.png';
import logoImage from './data/logo.png';
import { connect } from "react-redux";
import { postTvMovie } from "../redux/actions/addTvAndMovie";
import { listCategories } from "../redux/actions/categories";

import "./input.css";
// css 
const inputFile = {
    file : {
        opacity: 0,
        position: 'absolute',
        marginTop: '-35px',
        width: '100%',
        zIndex: 999,
        overflow: 'auto'},
    file2 : {
        opacity: 0,
        position: 'absolute',
        marginTop: '1px',
        width: '100%',
        height: 45,
        zIndex: 999,
        overflow: 'auto'},    
    inputA: {
        width: '100%', 
        display:'inline'
    }
}


////XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/////
// reusable adding more episodes form
function AddForm(props) {
    const { form } = props;
    return (
        <div>
            { form.map((formel,index) => {
                return (<div key={index}>{formel}</div>)
            })}
        </div>
    );
}

//////////////////////////////////////////////////////////////////////////////////
class AddFilm extends Component {
    constructor(){
        super()
        this.state = {
            formRow: [], dataAdd: {}, dataAddEpisode: [{}], arrEpisodes: {}, count: 0
        }
    }

// reusable design code for adding more episodes
    itemForm(i) {
        return <div>
                    <Form.Row className="pt-5 text-white">
                                <Col md={9}>
                                    <Form.Control
                                        type="text"
                                        name="titleEpisode"
                                        placeholder="Title Episode"
                                        onChange={this.handleChangeEpisode.bind(this, i)} 
                                    />
                                </Col>
                                <Col className="pt-1 text-dark" >
                                    <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
                                    <Form.File id="exampleFormControlFile1" style={inputFile.file}
                                        type="file"
                                        name="fileEpisode"
                                        onChange={this.handleChangeEpisode.bind(this, i)} 
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row className="pt-3 text-white">
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="linkEpisode"
                                        placeholder="Link Film"
                                        onChange={this.handleChangeEpisode.bind(this, i)} 
                                    />
                                </Col>
                    </Form.Row>
                </div>
            }

    adder(){
        console.log('xxxxx')
        let { count } = this.state
        let increment = count

        let xx = this.state.formRow
        let yy = this.itemForm(increment)
        xx.push(yy)
        
        increment++
        this.setState({formRow: xx, count: increment})
    }

    /////// backend handling /////// ----------------------------------

    handleChange = (event) => {
        const { dataAdd } = this.state;
        // console.log(event.target.value)
        this.setState({
        dataAdd: { ...dataAdd, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value },
        });
    };

    handleChangeEpisode = (i, event) => {
        // console.log(event.target.value)
        // dataAddEpisode = array berisi object [ {}{}{}{} ]

        let uploadEpisodes = [...this.state.dataAddEpisode];

        uploadEpisodes[i] = { ...uploadEpisodes[i], [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value };
        this.setState({ dataAddEpisode: uploadEpisodes });

        // 
        // 
        // 
        // 
        
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.state.dataAdd)
        // console.log(this.state.dataAddEpisode)
        
        // this.props.postTransaction(this.state.data, localStorage.getItem('id'));

        await this.props.postTvMovie(this.state.dataAdd, this.state.dataAddEpisode);

        await this.setState({ dataAdd: {} });
        await this.setState({ dataAddEpisode: [{}] });
        await this.setState({ arrEpisodes: {} });
        window.location.reload(false);
    };

    componentDidMount(){
        this.props.listCategories();
        this.adder()
    }

render(){
        const { data: addTVM } = this.props.addTvAndMovie;
        const { data: categoryList } = this.props.listCategory;
        if (!(Object.keys(addTVM).length === 0 && addTVM.constructor === Object)){
            //console.log(addTVM)
        }
        if (!(Object.keys(categoryList).length === 0 && categoryList.constructor === Object)){
            //console.log(categoryList)
        }


        const { dataAdd, dataAddEpisode, formRow } = this.state;
        let { status }  = this.props.match.params;
        let STATUS = status === 'admin' ? false : true; 

        return (
            <div style={{ width: '100%', height: '100%', paddingBottom: '150px' }} className="test">
                
                <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline className="ml-auto">
                {
                    STATUS ? 
                    (<div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>):
                    (<div>
                        <DropdownButton
                        alignRight
                        title={<Image src={userPhoto} />}
                        id="dropdown-menu-align-right"
                        variant="dark"
                        >
                            <Dropdown.Item eventKey="1" href="/logpay/profile" > <i className='fas fa-user' style={{width: 20}}></i> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="/logpay/pay"> <i className='fas fa-money-check-alt' style={{width: 20}}></i> Pay</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href="/admin/007"> <i className='fas fa-chalkboard-teacher' style={{width: 20}}></i> Admin </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4" 
                                onClick={() => {
                                    localStorage.removeItem('token') 
                                    localStorage.removeItem('role')
                                    localStorage.removeItem('id')
                                }}
                                href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>)
                }
                </Form>
            </Navbar.Collapse>
            </Navbar>

                <div className="ml-auto mr-auto rounded" style={{background: '#1F1F1F', width: 800, height: '100%', marginTop: 50}}>
                    <Form className="p-5" onSubmit={this.handleSubmit} >
                        <Form.Row className="pb-2">
                            <Col>
                                <h6 className="text-white">Add Film </h6>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col md={9}>
                                <Form.Control 
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={dataAdd.title ? dataAdd.title : ""}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col className="pt-1 text-dark" >
                                <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
                                <Form.File 
                                    id="exampleFormControlFile1"
                                    style={inputFile.file}
                                    type="file"
                                    name="fileFilm"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control 
                                    type="number"
                                    name="year"
                                    placeholder="Year"
                                    value={dataAdd.year ? dataAdd.year : ""}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3"  >
                            <Col>
                                <Form.Control as="select"
                                    name="categoryId"
                                    onChange={this.handleChange}
                                >
                                    <option>Category</option>
                                    <option>Tv Show</option>
                                    <option>Movies</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control as="textarea" rows="5"
                                    name="description"
                                    placeholder="Description"
                                    value={dataAdd.description ? dataAdd.description : ""}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Row>




                        <AddForm form={formRow} />


                        <Form.Row className="pt-3 text-danger adder">
                            <Col>
                                <Button className="btn-light text-danger"  block onClick={() => this.adder()}> + </Button>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3">
                            <Col md={9}>  
                            </Col>
                            <Col className="text-right">
                                <Button className="btn btn-outline-danger text-white" style={{background: '#E50914'}} block type="submit" >Save</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                </div>
            </div>        
        );
    }
}

// formData.append("title", title);
// formData.append("thumbnailFilm", file);
// formData.append("year", year);
// formData.append("categoryId", categoryId);
// formData.append("description", description);


const dumbFlix = {
    textAlign: 'left'
};

const mapStateToProps = (state) => {
    return {
        addTvAndMovie: state.addTvAndMovie,
        listCategory: state.listCategory
    };
};

export default connect(mapStateToProps, {  postTvMovie, listCategories })(AddFilm);
