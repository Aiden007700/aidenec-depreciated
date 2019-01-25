import styled from 'styled-components'

const Detailview = styled.div`
    .back {
        font-size: 3rem;
    }
`;

class WorkCard extends React.Component {
    render() {
        const {active, i, url, selectActive} = this.props
        return (  
            <div key={i} className={`portfolio__item i${i + 1} ${active === (i + 1) ? "active" : "not--active"}`} id={`${i + 1}`}>
                {active === (i + 1) ? 
                <Detailview>
                    <span className='back' onClick={() => selectActive(null)}>Back</span>
                </Detailview>
                :
                <div className="portfolio__item__content" onClick={() => selectActive((i + 1))}>
                    <a href={url}></a>
                </div>
                }
            </div>
      ); 
    }
}

export default WorkCard
