import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ModalAdvanced, { ModalInfo } from '@/app/components/ui/Modals/ModalAdvanced';

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface MealProps {
  id: number;
  title: string;
  date: string;
  protein: number;
  carbs: number;
  fats: number;
}

interface MealCategory {
  [category: string]: MealProps[];
}

const MealTabs = () => {
  const [categories, setCategories] = useState<MealCategory>({
    Breakfast: [
      {
        id: 1,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
      {
        id: 2,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
    ],
    Lunch: [
      {
        id: 1,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
      {
        id: 2,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
    ],
    Dinner: [
      {
        id: 1,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
      {
        id: 2,
        title: 'Rotisserie Chicken',
        date: '5h ago',
        protein: 80,
        carbs: 2,
        fats: 24,
      },
    ],
    Snacks: [],
  });

  const [modalView, setModalView] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    titleTxt: '',
    descTxt: '',
    rejectTxt: '',
    acceptTxt: '',
  });

  const onAddItem = () => {
    setModalView(true);
    setModalInfo({
      titleTxt: 'Adding Nutrition Source',
      descTxt: 'Please provide the details for the new nutrition source:',
      rejectTxt: 'Cancel',
      acceptTxt: 'Add Source',
    });
  };

  return (
    <>
      <ModalAdvanced
        title={modalInfo.titleTxt}
        description={modalInfo.descTxt}
        modalView={modalView}
        setModalView={setModalView}
        acknowledgeText={modalInfo.acceptTxt}
        onAcknowledge={() => {
          setModalView(false);
        }}
        rejectText={modalInfo.rejectTxt}
        onReject={() => {
          setModalView(false);
        }}
      />

      <h3 className="text-lg font-thin">Meal Tabs</h3>
      <div className="w-full max-w-sm lg:max-w-4xl px-2 sm:px-0 mx-10 pb-20">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-neutral-800/50 p-1 border-slate-700/70 border">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-metaAccent',
                    ' ring-metaAccent/30 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-neutral-800'
                      : 'text-blue-100 hover:bg-neutral-800/50 hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.entries(categories).map(([category, meal], idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-lg bg-neutral-800/50 p-3 border-slate-700/70 border'
                )}
              >
                <ul>
                  <li
                    key="add-item"
                    className="relative rounded-lg p-3 hover:bg-neutral-800/50 cursor-pointer"
                    onClick={onAddItem}
                  >
                    <h3 className="text-sm font-medium leading-5 text-metaAccent">Add Item (+)</h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>Add additional food or nutrition source</li>
                    </ul>
                  </li>
                  {meal.map((mealInfo: MealProps) => (
                    <li
                      key={mealInfo.id}
                      className="relative rounded-lg p-3 hover:bg-neutral-800/50 cursor-pointer"
                    >
                      <h3 className="text-sm font-medium leading-5">{mealInfo.title}</h3>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{mealInfo.date}</li>
                        <li>&middot;</li>
                        <li>{mealInfo.protein}g protein</li>
                        <li>&middot;</li>
                        <li>{mealInfo.carbs}g carbs</li>
                        <li>&middot;</li>
                        <li>{mealInfo.fats}g fats</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};
export default MealTabs;
