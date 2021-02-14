import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }
    
    renderComment(dish){
        if(dish!=null) {
            const comm = dish.comments;
            const comments = comm.map((_comment) => {
                return (
                    <div>
                    <p>{_comment.comment}</p>
                    <p>-- {_comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(_comment.date)))}</p>
                  </div>
                );
            })
            comments.unshift(<h4> Comments </h4>);
            return comments;
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render(){
        return (
            <div className = "container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComment(this.props.selectedDish)}
            </div>
            </div>
          </div>
        )
    }
}
export default DishDetail;