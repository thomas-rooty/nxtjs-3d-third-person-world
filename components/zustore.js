import create from 'zustand';

export const useStore = create((set) => ({
	// Add an object to the hoverable objects array
	// Everything in this list will become a hoverable object
	hoverableObjects: [],
	addObjectAsHoverable: (object) => {
		//hoverableObjects.filter(element => element.uuid === object.uuid).length === 0 &&
		set(state => {
			if (state.hoverableObjects.find(element => element.uuid === object.uuid)) return;
			return {
				hoverableObjects: state.hoverableObjects.concat(object),
			};
		});
	},

	// Handles the current hovered object by the tricycle
	hoveredObject: null,
	setObjectAsHovered: (object) => {
		set(() => {
			return {
				hoveredObject: object,
			};
		});
	},

	// Store the position of the character
	position: [0, 0, 0],
	setPosition: (position) => {
		set(() => {
			return {
				position: position,
			};
		});
	},

	// Store the current direction of the character (left or right)
	direction: null,
	setDirection: (direction) => {
		set(() => {
			return {
				direction: direction,
			};
		});
	},
}));