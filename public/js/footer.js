const creatFooter = ()=>{
    let footer = document.querySelector('.footer');
    footer.innerHTML=`
    <div class="container">
            <div class="row">
                <div class="box">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="">Quem somos nós</a></li>
                        <li><a href="">Nossos serviços</a></li>
                        <li><a href="">Termos de Serviços</a></li>
                        <li><a href="">Politica de Privacidade</a></li>
                    </ul>
                </div>
                <div class="box">
                    <h4>Ajuda</h4>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Pagamentos</a></li>
                        <li><a href="">Devoluções</a></li>
                        <li><a href="">Transporte</a></li>
                    </ul>
                </div>
                <div class="box">
                    <h4>Redes Sociais</h4>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
                <div class="box">
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="">Endereço</a></li>
                        <li><a href="">Email</a></li>
                        <li><a href="">Telefone</a></li>
                        <li><a href="">Whatsapp</a></li>
                    </ul>
                </div>
            </div>

            
        </div>
    `;
};
creatFooter();