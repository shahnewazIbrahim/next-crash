import Image from 'next/image';
import { useRouter } from 'next/router';

const PhotoPage = ({ photo }) => {
    const router = useRouter();
    const { id } = router.query;

    if (!photo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Photo {id}</h1>
            <Image src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();

    return {
        props: {
            photo,
        },
    };
}

export default PhotoPage;