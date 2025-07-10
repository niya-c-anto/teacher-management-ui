import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            👩‍🏫 Teacher Profile
          </h1>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow">
            Active
          </span>
        </div>

        {/* Teacher Info */}
        <section className="bg-white p-6 rounded-2xl shadow-lg mb-6 transition hover:shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alynia"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-blue-300"
            />
            <div>
              <h2 className="text-2xl font-semibold">Alynia Allan</h2>
              <p className="text-sm text-gray-500">
                Teacher • Born: 1990-01-01
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Email', value: 'alyniaallan@example.com' },
            { title: 'Phone', value: '+1 416-848-9057' },
            {
              title: 'Address',
              value: '36 Odorado Di Santo Dr, North York, ON, Canada',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-blue-700 font-medium mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Private Qualifications */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            🎓 Private Qualifications
          </h2>
          <table className="w-full text-sm border">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-2">Course</th>
                <th className="text-left p-2">Rate ($/hr)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Vocal Contemporary', rate: '$30' },
                { name: 'Vocal Core', rate: '$28' },
                { name: 'Vocal Hybrid', rate: '$28' },
                { name: 'Vocal Plus', rate: '$28' },
                { name: 'Instrument', rate: '$26' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Group Qualifications */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            👥 Group Qualifications
          </h2>
          <table className="w-full text-sm border">
            <thead className="bg-purple-100">
              <tr>
                <th className="text-left p-2">Course</th>
                <th className="text-left p-2">Rate ($/hr)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-purple-50">
                <td className="p-2">Group Vocal</td>
                <td className="p-2">$25</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Weekly Schedule */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            📅 Weekly Schedule
          </h2>
          <table className="min-w-full table-auto text-sm border text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Time</th>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                  <th key={d} className="p-2 border">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                '8:00 AM',
                '9:00 AM',
                '10:00 AM',
                '11:00 AM',
                '12:00 PM',
                '1:00 PM',
                '2:00 PM',
                '3:00 PM',
                '4:00 PM',
              ].map((time) => (
                <tr key={time}>
                  <td className="p-2 border font-medium">{time}</td>
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const isLesson =
                      (time === '3:00 PM' && dayIdx === 1) ||
                      (time === '4:00 PM' && dayIdx === 3);
                    return (
                      <td
                        key={dayIdx}
                        className={`p-2 border ${
                          isLesson
                            ? 'bg-blue-500 text-white font-bold rounded shadow'
                            : ''
                        }`}
                      >
                        {isLesson ? 'Lesson' : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
