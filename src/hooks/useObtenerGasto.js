import { useState, useEffect } from 'react';
import {db} from './../firebase/firebaseConfig';
import {useHistory} from 'react-router-dom';

const useObtenerGasto = (id) => {
    const history = useHistory();
    const [gasto, establecerGasto] = useState('');
    
    useEffect(() => {
        db.collection('gastos').doc(id).get()
        .then((doc) => {
            if(doc.exists) {
                establecerGasto(doc);
            } else {
                history.push('/lista-gastos');
            }
        })
    }, [history, id]);

    return [gasto];
}
 
export default useObtenerGasto;