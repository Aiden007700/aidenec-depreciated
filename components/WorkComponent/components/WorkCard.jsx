import styled from 'styled-components'

const Detailview = styled.div`
    a {
        font-size: 3rem;
    }
`;

class WorkCard extends React.Component {
    render() {
        const {active, i, url, selectActive} = this.props
        return ( 
            <>
            {active !== (i + 1 ) && 
            <div key={i} className={`portfolio__item i${i + 1} not--active`} id={`${i + 1}`} onClick={() => selectActive((i + 1))}>
                <div className="portfolio__item__content" >
                    <a href={url}></a>
                </div>
            </div>
            }
            {active === (i + 1) && 
            <div key={i} className={`portfolio__item i${i + 1} active`} id={`${i + 1}`} onClick={() => selectActive(null)}>
                <Detailview>
                    <a href="aidenec.com" target="_blank">Cool</a>
                </Detailview>
            </div>
            }
            </>
      ); 
    }
}

export default WorkCard