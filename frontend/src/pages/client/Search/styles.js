import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }

      &:maskplaceholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    span {
      color: #1d3557;
      align-self: flex-start;
      margin: -8px 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1d3557;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#1d3557')};
      }

      
    }

    select {
        background: #1d3557;
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.2);
        }

        &:maskplaceholder {
            color: rgba(0, 0, 0, 0.2);
        }

        
      }
  }

  textarea {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 100px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:maskplaceholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  timepicker {
    @mixin cf {
      &:after {
        content: "";
        display: table;
        clear: both;
      }
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    
    .container {
      width: 25%;
      margin: 0 auto;
      padding-top: 100px;
    }
    
    .timepicker {
      width: 100%;
      color: #808080;
      user-select: none;
      
      &__result {
        @include cf;
        background: #E8E8E8;
        border: solid 1px #D6D6D6;
        padding: 1em;
        font-weight: bold;
        cursor:pointer;
        position: relative;
        
        &-time, &-icon {
          float: left;
        }
        
        &-time {
          width: 90%;
          border-right: solid 2px #D6D6D6;
        }
        
        &-icon {
          width: 10%;
          padding-left: 0.7em;
        }
      }
      
      &__times {
        width: 100%;
        border: solid 1px #D6D6D6;
        border-top: none;
        display: none;
        max-height: 150px;
        overflow: hidden;
        overflow-y: auto;
        
          &::-webkit-scrollbar {
              width: 1em;
          }
    
          &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px     rgba(0,0,0,0.3);
          }
    
          &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
          }
      }
      
      
      &__time {
        @include cf;
        border-bottom: solid 1px #D6D6D6;
        
          &:last-child {
            border: none;
          }
        
        &-hour, &-minutes {
          float: left;
          cursor: pointer;
        }
        
        &-hour {
          width: 30%;
          padding: 20px;
          background: #D6D6D6;
          text-align: center;
          font-weight: bold;
          font-size: 2em;
        }
        
        &-minutes {
          width: 70%;
          text-align: center;
        }
        
        &-minute {
          font-size: 1.2em;
          padding: 1em;
          line-height: 4em;
          font-weight: bold;
        }
      }
    }
  }

 
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #e63946;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.12, '#e63946')};
    }
  }
`;