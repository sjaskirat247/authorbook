import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navbar from '@/components/Navbar';

export default function Book() {
  const router = useRouter();
  const { bookId } = router.query;
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (bookId) {
      
      fetch(`https://openlibrary.org/works/${bookId}.json`)
        .then((response) => response.json())
        .then((data) => setBookData(data))
        .catch((error) => console.error('Error fetching book data:', error));
    }
  }, [bookId]);


  return <div>(
    <Navbar/>
    <Container>
      {bookData ? (
        <>
          <Typography variant="h3" gutterBottom>
            {bookData.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {bookData.author_name && bookData.author_name.join(', ')}
          </Typography>
          <ImageList cols={3} gap={16}>
            {bookData.covers && (
              bookData.covers.map((coverId) => (
                <ImageListItem key={coverId}>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
                    alt={bookData.title}
                  />
                </ImageListItem>
              ))
            )}
            
          </ImageList>
        </>
      ) : (
        <Typography>Books Loading
           </Typography>
      )}
    </Container>
  );
    </div>
}
