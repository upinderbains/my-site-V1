import React from 'react';

const Projects = () => {
  return (
    <section class='projects' id='projects'>
      <h2 class='section__title section__title-projects'>Projects</h2>
      <div class='projects'>
        <div class='project'>
          <h3>Project 1</h3>
          <div class='project__item'>
            <div class='project__image-1'>
              <img src='test.png' class='project__image-large' />
              <div class='project__image-2'>
                <img src='test.png' class='project__image-medium' />
                <div class='project__image-3'>
                  <img src='test.png' class='project__image-small' />
                </div>
              </div>
            </div>
            <div class='project__text'>
              <p class='section__subtitle section__subtitle-project'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis ad eos alias deserunt? Enim, aperiam eum magnam nam
                officiis reprehenderit commodi facilis beatae sequi excepturi
                sunt dicta dolores corporis deleniti?
              </p>
            </div>
          </div>
          <div class='project__button'>
            <button class='button'>Demo</button>
            <button class='button'>Code</button>
          </div>
        </div>
        <div class='project'>
          <h3>Project 2</h3>

          <div class='project__text'>
            <p class='section__subtitle section__subtitle-project'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ad eos alias deserunt? Enim, aperiam eum magnam nam
              officiis reprehenderit commodi facilis beatae sequi excepturi sunt
              dicta dolores corporis deleniti?
            </p>
          </div>
          <div>
            <div class='project__image-1'>
              <img src='test.png' class='project__image-large' />
              <div class='project__image-2'>
                <img src='test.png' class='project__image-medium' />
                <div class='project__image-3'>
                  <img src='test.png' class='project__image-small' />
                </div>
              </div>
            </div>
          </div>
          <div class='project__button'>
            <button class='button'>Demo</button>
            <button class='button'>Code</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
