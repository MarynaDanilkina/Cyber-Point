import BannerTeams from 'components/BaannerTeams/BannerTeams';
import LogoTeams from 'components/logoTeams/logoTeams';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { reduserSlice } from 'reduxStore/Reducer';
import './modalNewTeam.sass';

export interface TeamForm {
  TeamName?: string;
  Teg?: string;
  Description?: string;
  Logo?: string;
  Banner?: string;
}
const ModalNewTeam = () => {
  const dispatch = useAppDispatch();
  const { closeModalFaceit, login } = reduserSlice.actions;
  const { addLogoTeams, addBannerTeams, closeModalNewTeam } = reduserSlice.actions;
  function СоздатьКоманду() {
  }
  function Закрыть() {
    dispatch(closeModalNewTeam())
  }
  function setImageLogo(imageLogo: Blob) {
    const logo = URL.createObjectURL(imageLogo!)
    dispatch(addLogoTeams(logo));
  }
  function setImageBanner(imageBanner: Blob) {
    const logo = URL.createObjectURL(imageBanner!)
    dispatch(addBannerTeams(logo));
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<TeamForm>()
  const onSubmit: SubmitHandler<TeamForm> = (data) => {
    reset();
    dispatch(closeModalNewTeam())
  };
  
  return (
    <>
      <div className="modal__container active">
        <div className="modal__team">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>Создание команды</p>
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit) } className='modal__form-team'>
              
              <div className="modal__info-logo">
                <label>
                  <input
                    type="file" className="input-file" multiple
                      {...register('Logo', {
                        required: '* Текст ошибки тут',
                        onChange: (e) => setImageLogo(e.target.files[0]),
                      })}>
                  </input>
                  <LogoTeams />
                  {errors?.Logo && (
                    <p className="error">
                      {errors.Logo.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="file" className="input-file" multiple
                      {...register('Banner', {
                        required: '* Текст ошибки тут',
                        onChange: (e) => setImageBanner(e.target.files[0]),
                      })}>
                  </input>
                  <BannerTeams/>
                  {errors?.Banner && (
                    <p className="error">
                      {errors.Banner.message}
                    </p>
                  )}
                </label>  
              </div>
              <div className="modal__info-infoTeam">
                  <div className="modal__info__title">
                    <p className=''>Информация</p>
                  </div>
                  <div className='modal__input-container'>
                    <div className='modal__input'>
                      <label>
                        <input
                          className="modal__input-teams" placeholder= "Название Команды"
                              {...register('TeamName', {
                            required: '* Текст ошибки тут',
                            minLength: { value: 4, message: '* Текст ошибки тут' },
                          })}
                        ></input>
                        {errors?.TeamName && (
                          <p className="error">
                            {errors.TeamName.message}
                          </p>
                        )}
                      </label>
                      
                    <label>
                      <input
                        className="modal__input-teams" placeholder= "Тег (4 буквы)"
                        {...register('Teg', {
                          required: '* Текст ошибки тут',
                          minLength: { value: 4, message: '* Текст ошибки тут' },
                        })}
                        data-testid="name"
                      ></input>
                      {errors?.Teg && (
                        <p className="error">
                          {errors.Teg.message}
                        </p>
                      )}
                    </label>
                      
                    </div>
                  <div className='modal__input__description'>
                    <label>
                      <textarea
                        className="modal__input-teams__description" placeholder= "Описание"
                        {...register('Description', {
                          required: '* Текст ошибки тут',
                          minLength: { value: 3, message: '* Текст ошибки тут' },
                        })}
                        data-testid="name"
                      ></textarea>
                      {errors?.Description && (
                        <p className="error">
                          {errors.Description.message}
                        </p>
                      )}
                    </label>
                    </div>
                  </div>
                
              </div>
              <div className="modal__info-infoTeam">
                <label>
                  <div className="modal__info__title">
                    <p className=''>Приглашение</p>
                  </div>
                  <div className='modal__input-container'>
                    <div className='modal__input'>
                      <input
                      className="modal__input-teamsLink" placeholder= "https://cyber-point.ru/invite/teamname"
                  
                      data-testid="name"
                      >
                      </input>
                      <div className='modal__input-copy'>
                        <img src='/копировать.png' alt='pfp' className='pfp' />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className='modal__info-button'>
                <button type="submit">
                  <img src='/СоздатьКоманду.png' alt='pfp' className='pfp' onClick={() => СоздатьКоманду()} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalNewTeam;