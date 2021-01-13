import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_IMAGES } from '../../GraphQL/Queries';
import './images.scss';
import { Loading } from '../Loading';

export const Images = () => {
  const { data } = useQuery(LOAD_IMAGES);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setImages(data.posts.items);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {loading && (
        <Loading />
      )}

      {images.length > 0 && (
        <div className="images">
          {images.map(img => (
            <img
              key={img.id}
              className="images__image"
              src={`
                https://uwatch.ams3.cdn.digitaloceanspaces.com/${img.thumbnail}
              `}
              alt="cybersport"
            />
          ))}
        </div>
      )}
    </>
  );
};
