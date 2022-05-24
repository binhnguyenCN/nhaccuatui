// libs
import { renderHook, act } from '@testing-library/react-hooks';
// hooks
import usePagination from './usePagination';

describe('change page', () => {
  it('should move to next page', () => {
    // arrange
    const total = 50;
    const limit = 10;
    const page = 1;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { pagination, handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(pagination.page + 1);
    });
    // assert
    expect(result.current.pagination.page).toBe(page + 1);
  });
  it('should move to prev page', () => {
    // arrange
    const total = 50;
    const limit = 10;
    const page = 3;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { pagination, handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(pagination.page - 1);
    });
    // assert
    expect(result.current.pagination.page).toBe(page - 1);
  });
  it('should not move prev', () => {
    // arrange
    const total = 50;
    const limit = 10;
    const page = 1;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { pagination, handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(pagination.page - 1);
    });
    // assert
    expect(result.current.pagination.page).toBe(page);
  });
  it('should not move next', () => {
    // arrange
    const total = 45;
    const limit = 10;
    const page = 5;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { pagination, handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(pagination.page + 1);
    });
    // assert
    expect(result.current.pagination.page).toBe(page);
  });
  it('should move to last page', () => {
    // arrange
    const total = 45;
    const limit = 10;
    const page = 1;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(Math.ceil(total / limit) + 10);
    });
    // assert
    expect(result.current.pagination.page).toBe(Math.ceil(total / limit));
  });
  it('should move to first page', () => {
    // arrange
    const total = 45;
    const limit = 10;
    const page = 3;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage(-10);
    });
    // assert
    expect(result.current.pagination.page).toBe(1);
  });
  it('should not move', () => {
    // arrange
    const total = 45;
    const limit = 10;
    const page = 3;
    const { result } = renderHook(() => usePagination(page, limit, total));
    const { handleChangePage } = result.current;
    // act
    expect(result.current.pagination.page).toBe(page);
    act(() => {
      handleChangePage('jest');
    });
    // assert
    expect(result.current.pagination.page).toBe(page);
  });
});
