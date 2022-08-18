import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Book } from '@mui/icons-material';

// an instance of a book
const a_book = {
    author: 'J.K. Rowling',
    created_on: 'Mon, 01 Jan 1970 00:00:00 GMT',
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
    pages: 1, 'subject': 'Harry Potter',
    sumarry: 'The novels chronicle the lives of a young wizard, Harry Potter, and his friends.',
    title: 'Harry Potter and the Philosopher\'s Stone',
}
 const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));


   
      
export default function RecipeReviewCard(book=a_book) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
                     
            title={Book.title}
            
        />
        {/* display the image of the book */}
        <CardMedia
            component="img"
            height="194"
            image={Book.img}
            alt={Book.title}
        />
        <CardContent>
            {/* information about the book */}
            <Typography variant="body2" color="text.secondary">
            Author: {Book.author}
            Genre: {Book.subject}
            Pages: {Book.pages}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            {/* dont forget to comeback and change the icons */}
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            {/* dont forget to comeback and change the icons */}
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {/* if they wat more of the summary it will display here */}
            <Typography paragraph>{book.summary}</Typography>
                    
            
            </CardContent>
        </Collapse>
        </Card>
    );
    }

