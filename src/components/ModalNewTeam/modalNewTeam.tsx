import BannerTeams from 'components/BaannerTeams/BannerTeams';
import LogoTeams from 'components/logoTeams/logoTeams';
import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
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
  const { addLogoTeams, addBannerTeams, closeModalNewTeam, openModalSuccess } = reduserSlice.actions;
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
    dispatch(openModalSuccess())
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
                    <label  className='label'>
                      <p className='while__typing'>Название Команды</p>
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
                      
                    <label className='label'>
                      <p className='while__typing err'>Тег (4 буквы)</p>
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
                    <label className='label__description'>
                      <p className='while__typing'>Описание</p>
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
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className='modal__info-button'>
                  <div className="" onClick={() => СоздатьКоманду()} >
                    <ButtonModal title={'Создать Команду'}/>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalNewTeam;