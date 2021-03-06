	var person = {
 		name: 'Charles Stockman',
 		location: 'Centreville, Virginia',
 		occupation: {
   			title: 'Software Engineer',
  			employer: '@techsursolutions.com'
 		},
 		photo: 'images/LinkedInChuck.jpg',
 		updates: [
   			{
     				platform: 'twitter',
     				status: 'I\'m happy, hope you\'re happy too!'
   			},
   			{
     				platform: 'twitter',
     				status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
   			},
   			{
     				platform: 'twitter',
     				status: 'Fear makes the wolf look bigger'
   			},
   			{
     				platform: 'facebook',
     				status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
   			}
 		]
	}

	class Photo extends React.Component {
	    render() {
	        return(
	            <div className="photo">
                    <img src={this.props.yourImage} alt="Photo" />
                </div>
	        )
	    }
	}

	class Bio extends React.Component {
	    render() {
	        return (
	           <div className="bio">
                   <h1 className="name">{this.props.name}</h1>
                   <h2 className="location">{this.props.location}</h2>
                   <div className="occupation">
                     <p>{this.props.occupation} {this.props.company}</p>
                   </div>
               </div>

	        )
	    }
	}

	class Updates extends React.Component {
	    render() {
	        return (
	           <div className="updates">
                   <ul>
                     <li className="update">Updates</li>
                     <li className="update">Updates</li>
                   </ul>
                </div>
	        )
	    }
	}

	class Card extends React.Component {

	    render() {
	        return (
                <div className="card">
                    <Photo yourImage={person.photo} />
                    <Bio name={person.name} location={person.location} occupation={person.occupation.title} company={person.occupation.employer}/>
                    <Updates/>
                </div>
            )
        }
	}

	ReactDOM.render(
        <Card>
          <Photo/>
        </Card>,
		document.getElementById('app')
	);