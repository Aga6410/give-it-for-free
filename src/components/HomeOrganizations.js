import React from 'react';
import decoration from "../assets/Decoration.svg"

const HomeOrganizations = () => {
    return (
        <section id="homeOrganizations" className="homeOrganizations_container container">
            <div className="whoWeHelp">
                <h1>Komu pomagamy?</h1>
                <img src={decoration} alt="decoration"/>
            </div>
            <div className="changeOrganizations">
                <button>Fundacjom</button>
                <button>Organizacjom<br/>pozarządowym</button>
                <button>Lokalny<br/>zbiórkom</button>
            </div>
            <p className="articleP">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="viewInfo">
                <div className="firstDivInfo">
                        <div>
                            <div>
                                <h1>Fundacja “Dbam o Zdrowie”</h1>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                        <div>
                            <div>
                                <h1>Fundacja “Dla dzieci”</h1>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <p>ubrania, meble, zabawki</p>
                        </div>
                        <div id="withoutBorder">
                            <div>
                                <h1>Fundacja “Bez domu”</h1>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    
                    <div className="pageNumber" id="withoutBorder">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                </div>
                <div className="secondDivInfo" >
                    <div>
                        <div>
                            <h1>Organizacja “Lorem Ipsum 1”</h1>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <p>Egestas, sed, tempus</p>
                    </div>
                    <div>
                        <div>
                            <h1>Organizacja “Lorem Ipsum 2”</h1>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        </div>
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                    <div id="withoutBorder">
                        <div>
                            <h1>Organizacja “Lorem Ipsum 3”</h1>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                    <div className="pageNumber">
                        <span>1</span>
                        <span>2</span>
                    </div>
                </div>
                <div className="thirdDivInfo">
                    <div>
                        <div>
                            <h1>Fundacja “Lorem Ipsum 1”</h1>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <p>Egestas, sed, tempus, gestas, sed, tempus</p>
                    </div>
                    <div>
                        <div>
                            <h1>Fundacja “Lorem Ipsum 2”</h1>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        </div>
                        <p>Ut, aliquam, purus, sit, amet, Ut, aliquam, purus, sit, amet</p>
                    </div>
                    <div id="withoutBorder">
                        <div>
                            <h1>Fundacja “Lorem Ipsum 3”</h1>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <p>Mi, quis, hendrerit, dolor, Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeOrganizations;

