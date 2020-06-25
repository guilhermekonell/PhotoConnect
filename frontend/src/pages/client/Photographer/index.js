import React from 'react';
import { Container, Grid, Portfolio, Cards } from './styles';
import { Form } from '@unform/web';
import AvatarInput from './AvatarInput';
import { Link } from 'react-router-dom';

//AvatarInput inserido para simular como deve ficar o avatar do fotógrafo 

function Photographer() {
    return (
    <Container>
        <Form>
            
            <AvatarInput></AvatarInput>
            
        </Form>
        <Cards>
        <h3>Nome do Fotógrafo</h3>
        </Cards>
        <Cards>
           <row>
               <column>
                    <Portfolio>
                        <Link to="/requestservice">Solicitar serviço</Link> 
                    </Portfolio>
                </column>    
            </row>
        </Cards>
        
        <Grid>
            <hr />
            <Cards>
            <h4>Portfolio 1</h4>
            </Cards>
            <div class="row"> 
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzSw40-GTIMURAAt-jQdIgun-sHRueJ8MWBg0Pp1ZZQJleTym"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYO44pYWILn5kRJzESsWSKsvKivTbnL5FnSXYty1u06ZTcDSRBw"></img>
                </div>
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s"></img>
                    <img src="https://thumbs.dreamstime.com/b/empty-table-top-sunset-beach-blue-against-blurred-background-93335710.jpg"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                </div>  
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzSw40-GTIMURAAt-jQdIgun-sHRueJ8MWBg0Pp1ZZQJleTym"></img>
                </div>
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYO44pYWILn5kRJzESsWSKsvKivTbnL5FnSXYty1u06ZTcDSRBw"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://thumbs.dreamstime.com/b/empty-table-top-sunset-beach-blue-against-blurred-background-93335710.jpg"></img>
                </div>
            </div>
            <hr />
            <Cards>
            <h4>Portfolio 2</h4>
            </Cards>
            <div class="row"> 
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzSw40-GTIMURAAt-jQdIgun-sHRueJ8MWBg0Pp1ZZQJleTym"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYO44pYWILn5kRJzESsWSKsvKivTbnL5FnSXYty1u06ZTcDSRBw"></img>
                </div>
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s"></img>
                    <img src="https://thumbs.dreamstime.com/b/empty-table-top-sunset-beach-blue-against-blurred-background-93335710.jpg"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                </div>  
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzSw40-GTIMURAAt-jQdIgun-sHRueJ8MWBg0Pp1ZZQJleTym"></img>
                </div>
                <div class="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYO44pYWILn5kRJzESsWSKsvKivTbnL5FnSXYty1u06ZTcDSRBw"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA"></img>
                    <img src="https://thumbs.dreamstime.com/b/empty-table-top-sunset-beach-blue-against-blurred-background-93335710.jpg"></img>
                </div>
            </div>
        </Grid>

    </Container>
    
    );
}



export default Photographer;