import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    
   function RenderComment({dish}){
       console.log(dish);
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
        }else {
            return null;
        }
    }

    function RenderDish({dish}) {
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

    const DishDetail = (props) => {
        console.log(props);
        return (
            <div className = "container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish = {props.selectedDish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComment dish = {props.selectedDish} />
            </div>
            </div>
          </div>
        )
    }

export default DishDetail;