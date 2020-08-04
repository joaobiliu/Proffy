import React from 'react';
import TeacherForm from '../../pages/TeacherForm';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/60472658?s=460&u=e146d4940fa29a601055e22539c8f77b402c8630&v=4" alt="João Witor"/>
                    <div>
                        <strong>João Witor</strong>
                        <span>Informática</span>
                    </div>
                </header>

                <p>Jovem Pesquisador e Cientista. Apaixonado por arduino, programação e tecnologia assistiva.</p>

                <footer>
                    <p>
                        Preço/Hora 
                        <strong>R$ 20,00</strong>
                    </p>
                    <button type="button">
                    <img src={whatsappIcon} alt="whats"/>
                    Entrar em contato
                    </button>
                </footer>
            </article>
    );
}

export default TeacherItem;