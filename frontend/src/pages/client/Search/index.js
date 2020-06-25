import React from 'react';
import { Container } from './styles';
import { Form } from '@unform/web';

import InputMask from '../../../components/InputMask';
import Input from '../../../components/Input';

function Search() {
    return (
    <Container>
        <Form initialData={""} onSubmit={""}>
       
       

       <select class="form-control" id="subject" name="subject" required>
       <option value="" selected disabled>Categoria</option>        
       <option value="subject-one">Casamento</option>
       <option value="subject-two">Aniversário</option>
       <option value="subject-three">Book infantil</option>
       <option value="subject-four">Comercial</option>
       </select>

        <hr />

       </Form>

    </Container>
    

    
    );
}



export default Search;