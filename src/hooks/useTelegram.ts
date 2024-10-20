const tg =  window.Telegram.WebApp;


export const useTelegram = () => {

	const onClose = () => {
		tg.close()
	}

	const appReady  = () => {
		tg.ready()
	}

	return {
		tg,
		user: tg.initDataUnsafe?.user,
		onClose,
		appReady
	}
}