import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

const CardContent = props => {
    console.log(props)
    return (
        <Segment>
            <Card>
                <Card.Content>
                    <Card.Header>
                        Name: {props.data.name}
                    </Card.Header>
                    <Card.Meta>
                        Email: {props.data.email}
                    </Card.Meta>
                    <Card.Meta>
                        Do we have soul?: {props.data.checkbox.toString()}
                    </Card.Meta>
                    <Card.Meta>
                        ID: {props.data.id}
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Segment>
    )
}

export default CardContent