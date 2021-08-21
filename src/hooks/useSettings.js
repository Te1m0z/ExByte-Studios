import { useContext } from 'react';
import { SettingsContext } from '../context/index.js';

export function useSettings() {

	const context = useContext(SettingsContext);

	return context;
}