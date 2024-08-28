import React, { useEffect } from 'react';
   import axios from 'axios';
   import { useParams } from 'react-router-dom';

   const Activate = () => {
       const { uidb64 } = useParams();

       useEffect(() => {
           const activateAccount = async () => {
               try {
                   await axios.get(`http://localhost:8000/activate/${uidb64}/`);
                   alert('Account activated successfully!');
               } catch (error) {
                   console.error(error);
                   alert('Activation failed.');
               }
           };
           activateAccount();
       }, [uidb64]);

       return <div>Activating your account...</div>;
   };