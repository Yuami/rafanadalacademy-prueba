import React from 'react'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}))

export default function UserPanel ({ user, type }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" color="primary">
                    {user?.user_fullname || 'None'}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Position: {type}
                </Typography>
            </CardContent>
        </Card>
    )
}
