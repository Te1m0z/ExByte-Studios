import { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({settings, children}) => {

	const [ curSettings, setCurSettings ] = useState(settings);

	const saveSettings = state => {
		// изменить в state
		setCurSettings(state);
		// занести в storage
		localStorage.setItem('theme', state.theme);
		// убрать старый класс темы
		document.body.classList.remove(curSettings.theme);
		// добавить новый
		document.body.classList.add(state.theme);
	};

	return (
		<SettingsContext.Provider value={{ settings: curSettings, saveSettings }}>
			{children}
		</SettingsContext.Provider>
	);

};

export const SettingsConsumer = SettingsContext.Consumer;

// export SettingsContext;