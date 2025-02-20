const NavBar = ( props ) => {


    return (
        <nav>
            <ul>

                {
                    props.links.map( (link) => {
                        //destrutturizzazione
                        const {id,href,text} = link;

                        return (
                            <li key={ id }>
                                <a href={ href }>{ text }</a>
                            </li>
                        )
                    })

                }
                
               
            </ul>
        </nav>
    )
}

export default NavBar;