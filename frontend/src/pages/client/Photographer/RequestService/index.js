import React from 'react';
import { Container } from './styles';
import { Form } from '@unform/web';

import InputMask from '../../../../components/InputMask';
import Input from '../../../../components/Input';



function RequestService() {
    return (
    <Container>
        <Form initialData={""} onSubmit={""}>
       
        <span>Categoria do evento:</span>

        <select class="form-control" id="subject" name="subject" required>
        <option value="" selected disabled>Selecione</option>        
        <option value="subject-one">Casamento</option>
        <option value="subject-two">Aniversário</option>
        <option value="subject-three">Book infantil</option>
        <option value="subject-four">Comercial</option>
        </select>
  
        <div></div>
        

        <hr />

        <span>Endereco do evento:</span>

        <Input name="street" placeholder="Rua" />
        <Input name="street_number" placeholder="Número" />
        <Input name="complement" placeholder="Complemento" />
        <Input name="neighborhood" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" />
        <Input name="state" placeholder="Estado" />
        <Input name="zip_code" placeholder="CEP" />
        <InputMask
          name="phone_number"
          mask="(99) 9 9999-9999"
          placeholder="Telefone"
        />
        <hr />

        <span>Data do evento:</span>
        <input name="event_date" type="date"/>

        <hr />

        <span>Horário do evento:</span>
        <InputMask
          name="time_begin"
          mask="99:99"
          placeholder="Hora de início"
        />
        <InputMask
          name="time_end"
          mask="99:99"
          placeholder="Hora de término"
        />

        
        
        

        <hr />

        <span>Descrição:</span>
        <textarea placeholder="Digite a descrição do evento"></textarea>
        

        <button type="submit">Enviar solicitação</button>
      </Form>

    </Container>
    

    
    );
}



export default RequestService;