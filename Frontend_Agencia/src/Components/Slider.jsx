import React from 'react';

function Slider(){
    return(
        <>
           <section class="carrosel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="carousel-caption d-none d-md-block text-ligth">
                                    <h1>Preparamos programações e preços imperdíveis para você e toda família se divertir!</h1>
                                </div>
                            <img class="d-block w-100" src="img/passeio-familia.jpg" alt="Primeiro Slide"/>
                            </div>
                        <div class="carousel-item ">
                            <div class="carousel-caption d-none d-md-block text-ligth">
                                    <h2>Roteiros incríveis! </h2>
                                    <p>Confira nossos pacotes.</p>
                            </div>
                            <img class="d-block w-100" src="img/passeio-do-casal.jpg " alt="Segundo Slide"/>
                        </div>
                        <div class="carousel-item ">
                            <div class="carousel-caption d-none d-md-block">
                                    <h1>Quanto mais amigos,mais divertido!</h1>
                                    <h2>Chama sua galera e vem viajar com a VS viagens e Turismo.</h2>
                                    <h2>Você não vai ficar de fora né?!</h2>
                            </div>
                            <img class="d-block w-100" src="img/galera.jpg" alt="Terceiro Slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Próximo</span>
                        </a>
                </div>
        </section>
        </>
    );
}
export default Slider;