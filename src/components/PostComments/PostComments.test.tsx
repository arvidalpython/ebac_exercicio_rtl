import { fireEvent, render, screen } from '@testing-library/react';
// import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "primeiro comentário" na lista', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'primeiro comentário'
            }
        });
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        // expect(screen.getByText('primeiro comentário')).toBeInTheDocument()
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'segundo comentário'
            }
        });

        fireEvent.click(screen.getByTestId('btn-cadastrar'));
        expect(screen.getAllByTestId('campo-tarefa-li')).toHaveLength(2);
    })

});