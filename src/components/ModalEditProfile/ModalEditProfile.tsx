import BannerTeams from 'components/BaannerTeams/BannerTeams';
import LogoTeams from 'components/logoTeams/logoTeams';
import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
import { useAppDispatch } from 'interface/interface';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { reduserSlice } from 'reduxStore/Reducer';
import './ModalEditProfile.sass';

export interface TeamForm {
  Teg?: string;
  Logo?: string;
}
const ModalEditProfile = () => {
  const dispatch = useAppDispatch();
  const { addLogoTeams, addBannerTeams, closeModalEditProfile } = reduserSlice.actions;
  function Закрыть() {
    dispatch(closeModalEditProfile())
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
    dispatch(closeModalEditProfile())
  };
  
  return (
    <>
      <div className="modal__container active">
        <div className="modal__team">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>редактирова&shy;ние профиля</p>
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
              </div>
              <div className="modal__info-infoTeam">
                  <div className="modal__info__title">
                    <p className=''>Информация</p>
                  </div>
                  <div className='modal__input-container'>
                    <div className='modal__input'>
                    <label  className='label'>
                      <p className='while__typing'>Ник</p>
                        <input
                          className="modal__input-teams editProfile" placeholder= "Ник"
                              {...register('Teg', {
                            required: '* Текст ошибки тут',
                            minLength: { value: 4, message: '* Текст ошибки тут' },
                          })}
                        ></input>
                        {errors?.Teg && (
                          <p className="error">
                            {errors.Teg.message}
                          </p>
                        )}
                      </label>
                      
                    </div>
                  </div>
                
              </div>
              <div className='modal__info-button'>
                  <div className="" onClick={() => Закрыть()} >
                    <ButtonModal title={'СОХРАНИТЬ Изменения'}/>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalEditProfile;