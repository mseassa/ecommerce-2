import React from "react";
import ImageUploading from "react-images-uploading";
import { Row, Form, Button } from "react-bootstrap";
import images from "../../constants/images";

const AdminAddProductImageInput = () => {
  const [imgs, setImgs] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImgs(imageList);
  };
  return (
    <>
      <div>
        <ImageUploading
          multiple
          value={imgs}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper text-start">
              <Button
                className="rounded-0"
                variant="light"
                onClick={onImageUpload}
                {...dragProps}
              >
                <img
                  src={images.avatar}
                  alt=""
                  height="100px"
                  width="120px"
                  style={{ cursor: "pointer" }}
                />
              </Button>
              <div className="d-flex flex-wrap justify-content-center">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item col-2">
                    <img
                      src={image["data_url"]}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <div className="image-item__btn-wrapper position-relative">
                      <button
                        onClick={() => onImageRemove(index)}
                        className="btn btn-sm btn-danger rounded-0 position-absolute end-0 bottom-0"
                      >
                        <i className="fa fa-times p-1"></i>
                      </button>
                      <button
                        onClick={() => onImageUpdate(index)}
                        className="btn btn-sm btn-primary rounded-0 position-absolute end-0 top-0"
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
};

export default AdminAddProductImageInput;
