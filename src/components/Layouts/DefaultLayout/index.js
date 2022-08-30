import Header from '~/components/Layouts/components/Header';
import SubHeader from '~/components/Layouts/components/SubHeader';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <SubHeader />
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
