import React from 'react';
import Banner from './../Banner';

const CreateArticle = () => {
	return (
		<div>

      {/* Header */}

      <Banner
        backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
        title="Write an article"      
      />

      {/* END Header */}
      
  {/* Main container */}
  <main className="main-content">
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <form className="p-30 bg-gray rounded" method="POST" data-form="mailer">
              <div className="row">
                <div className="form-group col-md-12 my-5">
                  <input className="form-control" type="file" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input name="name" className="form-control form-control-lg" type="text" placeholder="Title" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <select name className="form-control form-control-lg" id>
                    <option value>Select category</option>
                    <option value>Vuejs</option>
                    <option value>Reactjs</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control form-control-lg" placeholder="Content" rows={4} defaultValue={""} />
              </div>
              <div className="text-center">
                <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* END Main container */}
</div>

		);
};

export default CreateArticle;