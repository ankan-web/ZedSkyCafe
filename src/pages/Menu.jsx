import React, { useState } from 'react';
import { 
  Search,
  Coffee,
  UtensilsCrossed,
  Pizza,
  Soup,
  Salad,
  Sandwich,
  Beef,
  Wine,
  Cake,
  Flame,
  Filter,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen
} from 'lucide-react';

const ZedSkyMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Items', icon: BookOpen },
    { id: 'shisha', name: 'Shisha', icon: Flame },
    { id: 'coffee', name: 'Coffee & Tea', icon: Coffee },
    { id: 'appetizers', name: 'Appetizers', icon: UtensilsCrossed },
    { id: 'soup', name: 'Soup', icon: Soup },
    { id: 'salad', name: 'Salad', icon: Salad },
    { id: 'sandwich', name: 'Sandwiches', icon: Sandwich },
    { id: 'burger', name: 'Burgers', icon: Beef },
    { id: 'pizza', name: 'Pizza', icon: Pizza },
    { id: 'pasta', name: 'Pasta', icon: UtensilsCrossed },
    { id: 'mains', name: 'Mains', icon: Beef },
    { id: 'sizzler', name: 'Sizzlers', icon: Flame },
    { id: 'desserts', name: 'Desserts', icon: Cake },
    { id: 'drinks', name: 'Drinks', icon: Wine }
  ];

  // Complete menu data from PDF
  const menuItems = [
    // Shisha Section
    { id: 1, category: 'shisha', name: 'Double Apple', price: 399, description: 'Classic double apple flavor', type: 'Basic' },
    { id: 2, category: 'shisha', name: 'Orange', price: 399, description: 'Fresh citrus orange', type: 'Basic' },
    { id: 3, category: 'shisha', name: 'Grape', price: 399, description: 'Sweet grape flavor', type: 'Basic' },
    { id: 4, category: 'shisha', name: 'Brain Freezer', price: 399, description: 'Minty fresh blend', type: 'Basic' },
    { id: 5, category: 'shisha', name: 'Gum Supari', price: 499, description: 'Premium gum supari blend', type: 'Premium' },
    { id: 6, category: 'shisha', name: 'Kiwi Spring', price: 499, description: 'Fresh kiwi with mint', type: 'Premium' },
    { id: 7, category: 'shisha', name: 'Teen Pan Rose', price: 499, description: 'Rose flavored pan', type: 'Premium' },
    { id: 8, category: 'shisha', name: 'Vanila Rasna', price: 499, description: 'Vanilla with rasna', type: 'Premium' },
    { id: 9, category: 'shisha', name: 'Blue Berry Spring Water', price: 499, description: 'Blueberry with spring water', type: 'Premium' },
    { id: 10, category: 'shisha', name: 'Elachi Mint', price: 499, description: 'Cardamom and mint', type: 'Premium' },
    { id: 11, category: 'shisha', name: 'Lemon Mint', price: 499, description: 'Refreshing lemon mint', type: 'Premium' },
    { id: 12, category: 'shisha', name: 'Royal Caribbean', price: 599, description: 'Royal Pan + Royal Gold + Kiwi + Rasna', type: 'Zed Special' },
    { id: 13, category: 'shisha', name: 'White Walkers', price: 599, description: 'Brain Freezer + Orange + Mint', type: 'Zed Special' },
    { id: 14, category: 'shisha', name: 'Napaa Valley', price: 599, description: 'Teen Pan + Grape Mint', type: 'Zed Special' },
    { id: 15, category: 'shisha', name: 'Rose Russiana', price: 599, description: 'Rose + Gum + Spring Water', type: 'Zed Special' },
    { id: 16, category: 'shisha', name: 'Panch Pan', price: 599, description: 'Gulabi Pan + Pan Masti + Royal Pan + Sali Pan + Pan Rasna', type: 'Zed Special' },

    // Coffee & Tea
    { id: 17, category: 'coffee', name: 'Espresso Short', price: 100, description: 'Strong and concentrated coffee shot' },
    { id: 18, category: 'coffee', name: 'Cappuccino', price: 130, description: 'Espresso with steamed milk foam' },
    { id: 19, category: 'coffee', name: 'Cafe Latte', price: 130, description: 'Espresso with lots of steamed milk' },
    { id: 20, category: 'coffee', name: 'Hot Chocolate', price: 130, description: 'Rich and creamy hot chocolate' },
    { id: 21, category: 'coffee', name: 'Black Coffee', price: 90, description: 'Simple and bold black coffee' },
    { id: 22, category: 'coffee', name: 'Cold Coffee', price: 200, description: 'Ice cream, coffee, milk blended perfectly' },
    { id: 23, category: 'coffee', name: 'Hazelnut Cappuccino', price: 220, description: 'Rich espresso with steamed milk and roasted hazelnut essence' },
    { id: 24, category: 'coffee', name: 'Classic Cold Brew', price: 240, description: 'Steeped for 12 hours for a smooth, bold caffeine kick' },
    { id: 25, category: 'coffee', name: 'Asam Tea', price: 90, description: 'Traditional Assamese tea' },
    { id: 26, category: 'coffee', name: 'Jasmine Tea', price: 90, description: 'Fragrant jasmine tea' },
    { id: 27, category: 'coffee', name: 'Rose Jasmine Tea', price: 90, description: 'Rose and jasmine blend' },
    { id: 28, category: 'coffee', name: 'Darjeeling Tea', price: 90, description: 'Premium Darjeeling tea' },
    { id: 29, category: 'coffee', name: 'Masala Tea', price: 90, description: 'Spiced Indian tea' },

    // Soups
    { id: 30, category: 'soup', name: 'Smoky Tomato & Red Pepper', price: 180, description: 'Soup with roasted tomatoes & red peppers flavoured with basil', dips: 'Croutons' },
    { id: 31, category: 'soup', name: 'Mushroom Veloute', price: 200, description: 'Creamy mushroom soup and herbs' },
    { id: 32, category: 'soup', name: 'Cilantro & Lemon Prawn', price: 250, description: 'Cilantro flavoured prawn soup with lemon' },

    // Salads
    { id: 33, category: 'salad', name: 'Caesar Salad', price: 250, description: 'Crisp romaine and iceberg lettuce tossed in caesar dressing with garlic croutons', options: 'Add grilled chicken +₹50' },
    { id: 34, category: 'salad', name: 'The Zed Classic Grilled Chicken Salad', price: 280, description: 'Grilled chicken, exotic veggies, lettuce dressed with honey chili mustard', dips: 'Garlic Bread' },

    // Sandwiches
    { id: 35, category: 'sandwich', name: 'Mediterranean Grilled Veg Sandwich', price: 180, description: 'Grilled cheese sandwich with zucchini, bellpepper and carrot', dips: 'French Fries' },
    { id: 36, category: 'sandwich', name: 'Jerk Chicken and Honey Mustard Sandwich', price: 230, description: 'Tandoori cottage cheese and bell pepper with Indian spices', dips: 'French Fries' },

    // Burgers
    { id: 37, category: 'burger', name: 'European Veg Burger', price: 200, description: 'Crispy golden fried vegetable patty with aioli', dips: 'French Fries' },
    { id: 38, category: 'burger', name: 'The Ultimate Chicken Juicy Lucy', price: 240, description: 'Grilled juicy chicken patty and melted cheese topped with a sunny-side up egg and Texan mayo', dips: 'French Fries' },
    { id: 39, category: 'burger', name: 'Texan Fried Chicken Burger', price: 260, description: 'Homemade Texan fried chicken patty with aioli and cheese sauce', dips: 'French Fries' },
    { id: 40, category: 'burger', name: 'Zed Lamb Burger', price: 340, description: 'Minced lamb patty grilled to perfection with cheddar cheese and aioli', dips: 'French Fries' },

    // Pizza
    { id: 41, category: 'pizza', name: 'Classic Margherita Pizza', price: 250, description: 'The classic pizza with tomato sauce, mozzarella and fresh basil' },
    { id: 42, category: 'pizza', name: 'Genovese Pizza', price: 320, description: 'Pesto based pizza topped with bell peppers, olive, sundried tomato, onion & jalapeno' },
    { id: 43, category: 'pizza', name: 'Royal Bengal Lamb Pizza', price: 480, description: 'Pizza with spicy minced lamb, fresh tomato mozzarella, onion and cilantro' },
    { id: 44, category: 'pizza', name: 'Pollo Picante Pizza', price: 440, description: 'Pesto based pizza topped with grilled chicken, jalapeno & onion' },
    { id: 45, category: 'pizza', name: 'Pesto Chicken & Olives Pizza', price: 400, description: 'Pesto based pizza with grilled chicken and olives' },
    { id: 46, category: 'pizza', name: 'Woodfire Pizza', price: 350, description: 'Thin crust topped with premium mozzarella, basil, and olives' },

    // Pasta
    { id: 47, category: 'pasta', name: 'Arrabiata Brain Freezer', price: 220, description: 'Choice of pasta in spicy tomato sauce with basil and garlic', dips: 'Garlic Bread' },
    { id: 48, category: 'pasta', name: 'The Original Mr. Alfredo', price: 250, description: 'Choice of pasta in creamy white sauce and parmesan cheese', dips: 'Garlic Bread' },
    { id: 49, category: 'pasta', name: 'Pestogams', price: 270, description: 'Choice of pasta in creamy pesto sauce', dips: 'Garlic Bread', options: 'Add grilled chicken +₹50' },

    // Mains
    { id: 50, category: 'mains', name: 'Grilled Baramundi Fish', price: 450, description: 'Marinated bhetki grilled to perfection served with butter rice & grilled veggies' },
    { id: 51, category: 'mains', name: 'Thai Curry with Rice', price: 300, description: 'Thai red/green curry with basil rice/garlic herb rice', options: 'Veg ₹300 | Chicken ₹350 | Prawn ₹450' },

    // Sizzlers
    { id: 52, category: 'sizzler', name: 'Oriental Sizzler', price: 450, description: 'Thai chicken curry, butter rice, Malaysian chicken satay' },
    { id: 53, category: 'sizzler', name: 'Chicken Overload Sizzler', price: 470, description: 'Chicken Pesto Fingers, Chicken popcorn, Choice of chicken wings' },

    // Desserts
    { id: 54, category: 'desserts', name: 'Brownie with Ice Cream', price: 220, description: 'Brownie served with a scoop of vanilla ice cream' },
    { id: 55, category: 'desserts', name: 'Gondhoraj Creme Brulee', price: 160, description: 'Custard based dessert with crispy caramel and gandhoraj lemon' },
    { id: 56, category: 'desserts', name: 'Zed Special Shake', price: 350, description: 'Brownie, vanilla, chocolate gems' },

    // Drinks
    { id: 57, category: 'drinks', name: 'Watermelon Fresca', price: 150, description: 'Fresh watermelon, celery and Indian masala, lime juice' },
    { id: 58, category: 'drinks', name: 'Berry Sparkler', price: 300, description: 'Mix berries, lime and simple syrup' },
    { id: 59, category: 'drinks', name: 'Summer Fizz', price: 250, description: 'Fresh orange, mint and cucumber, top up with ginger ale' },
    { id: 60, category: 'drinks', name: 'Zed & Tonic', price: 250, description: 'Fresh Basil, yuzu puree, honey water and top up tonic' },
    { id: 61, category: 'drinks', name: 'Apple Cinnamon Cooler', price: 200, description: 'Apple juice, cinnamon syrup, lime juice' },
    { id: 62, category: 'drinks', name: 'Bengal Pride', price: 150, description: 'Kaffir leaf, orange juice, Pineapple juice, dash of grenadine' },
    { id: 63, category: 'drinks', name: 'Cinderella', price: 150, description: 'Cranberry juice, basil leaf, lime juice & simple syrup' },
    { id: 64, category: 'drinks', name: 'Love Me Like You Do', price: 250, description: 'Fresh jalapeno, guava juice, tabasco sauce, worcestershire sauce' },
    { id: 65, category: 'drinks', name: 'Flavour Ice Tea', price: 150, description: 'Homemade tea with lemon/peach/green apple' },
    { id: 66, category: 'drinks', name: 'Pink Lady', price: 200, description: 'Strawberry syrup, cranberry juice & orange juice' },
    { id: 67, category: 'drinks', name: 'Mone Pore Ruby Roy', price: 200, description: 'Blueberry syrup & secret ingredient' },
    { id: 68, category: 'drinks', name: 'Love Therapy', price: 200, description: 'Litchi juice & homemade strawberry sharba' },
    { id: 69, category: 'drinks', name: 'Sky Blue Lagoon', price: 180, description: 'Refreshing blue curacao blend with a hint of citrus and mint' },
    { id: 70, category: 'drinks', name: 'Kit Kat Shake', price: 200, description: 'Vanilla ice cream with kit kat, fresh cream' },
    { id: 71, category: 'drinks', name: 'Popcorn Shake', price: 250, description: 'Vanilla ice cream with popcorn syrup' },
    { id: 72, category: 'drinks', name: 'Oreo Shake', price: 250, description: 'Oreo biscuit, ice cream, milk' },

    // Appetizers/Gourmet Bites
    { id: 73, category: 'appetizers', name: 'Loaded Nachos', price: 260, description: 'Crispy tortilla chips loaded with melted cheese, jalapeños, and onions' },
    { id: 74, category: 'appetizers', name: 'The Zed Burger', price: 290, description: 'Double patty with caramelized onions, secret sauce, and cheddar' },
    { id: 75, category: 'appetizers', name: 'Zed Signature Platter', price: 380, description: 'Assorted grilled delicacies served with house special dip and garden' },
  ];

  // Filter items based on category and search
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Group items by category for display
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const CategoryIcon = ({ categoryId }) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return null;
    const Icon = category.icon;
    return <Icon className="w-4 h-4 text-[#d4af37]" />;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-['Inter']">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent py-12 px-5 lg:py-16 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">ZED SKY MENU</h1>
          <p className="text-gray-400 text-lg">Explore Flavors · Handcrafted for the perfect rooftop vibe</p>
        </div>
      </div>

      {/* Digital Menu PDF Banner */}
      <div className="px-5 lg:px-10 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Digital Menu PDF</h3>
                <p className="text-gray-400 text-sm">View the full menu in original format</p>
              </div>
            </div>
            
            <a 
              href="/6c5c4b02fef06e8fca049ba45a185205_repaired.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#b38f2e] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              See Menu PDF
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-lg border-b border-white/10 py-4 px-5 lg:px-10 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Top Row: Search & Mobile Toggle */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search dishes, drinks, or flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
              />
            </div>
            
            {/* Filter Toggle - Mobile */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Bottom Row: Desktop Categories */}
          <div className="hidden lg:flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full items-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-[#d4af37] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-2 space-y-4">
              {/* Category Grid */}
              <div className="grid grid-cols-3 gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs ${
                      activeCategory === category.id
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-center">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Price Range</h4>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#d4af37]"
                  />
                  <span className="text-sm text-gray-300">Up to ₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Content */}
      <div className="py-8 lg:py-12 px-5 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-400 text-sm">
              Showing {filteredItems.length} items
            </p>
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="flex items-center gap-1 text-[#d4af37] text-sm hover:underline"
              >
                <X className="w-3 h-3" />
                Clear filter
              </button>
            )}
          </div>

          {/* Menu Items by Category */}
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-10 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <CategoryIcon categoryId={category} />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white capitalize">
                  {category === 'appetizers' ? 'Gourmet Bites' : category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent"></div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {items.map(item => (
                  <div key={item.id} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                      <span className="text-[#d4af37] font-bold">₹{item.price}</span>
                    </div>
                    
                    {/* DYNAMIC TAG STYLING HERE */}
                    {item.type && (
                      <span className={`inline-block text-xs px-2 py-1 rounded mb-2 border ${
                        item.type === 'Premium' 
                          ? 'bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/50' 
                          : item.type === 'Basic'
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                          : 'bg-purple-500/20 text-purple-400 border-purple-500/50' // For Zed Special
                      }`}>
                        {item.type}
                      </span>
                    )}
                    
                    <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                    
                    {item.dips && (
                      <p className="text-xs text-gray-500">
                        <span className="text-[#d4af37]">Served with:</span> {item.dips}
                      </p>
                    )}
                    
                    {item.options && (
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="text-[#d4af37]">Options:</span> {item.options}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-400">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setPriceRange([0, 1000]);
                }}
                className="mt-4 bg-[#d4af37] text-black px-6 py-2 rounded-full font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="sticky bottom-20 lg:bottom-10 left-0 right-0 flex justify-center px-5 lg:px-10 pointer-events-none">
        <div className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-3 pointer-events-auto">
          <span className="text-sm lg:text-base">Call to Order: +91 98765 43210</span>
        </div>
      </div>
    </div>
  );
};

export default ZedSkyMenu;